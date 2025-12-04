import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import diaryList from '$lib/data/space-diaries/diary-list.json';
import { marked } from 'marked';

// Preload all markdown files at build time
const diaryModules = import.meta.glob('$lib/data/space-diaries/*.md', { 
	as: 'raw',
	eager: false 
});

export const load: PageLoad = async ({ params }) => {
	const diary = diaryList.find(d => d.slug === params.slug);
	
	if (!diary) {
		throw error(404, 'Diary not found');
	}
	
	// Load the markdown file
	try {
		// Find the module by matching the filename
		const availablePaths = Object.keys(diaryModules);
		
		// Try exact match first
		let foundPath = availablePaths.find(p => p.endsWith(`/${diary.file}`));
		
		// If not found, try partial match
		if (!foundPath) {
			foundPath = availablePaths.find(p => {
				const pathParts = p.split('/');
				return pathParts[pathParts.length - 1] === diary.file;
			});
		}
		
		// Last resort: any path containing the filename
		if (!foundPath) {
			foundPath = availablePaths.find(p => p.includes(diary.file));
		}
		
		if (!foundPath) {
			console.error('Available paths:', availablePaths);
			console.error('Looking for file:', diary.file);
			throw error(404, `Diary file not found: ${diary.file}`);
		}
		
		const markdownModule = diaryModules[foundPath];
		if (!markdownModule) {
			throw error(404, `Failed to load module for: ${diary.file}`);
		}
		
		const markdownContent = await markdownModule();
		const htmlContent = marked(markdownContent as string);
		
		return {
			diary: {
				...diary,
				content: htmlContent
			}
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e) {
			throw e;
		}
		console.error('Error loading diary:', e);
		throw error(404, `Diary file not found: ${diary.file}`);
	}
};
