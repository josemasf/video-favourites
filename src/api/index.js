export const getVideos = async () => {
	try{
		const resp = await fetch('http://localhost:3500/videos');
		return resp.json();
	}catch(error){
		throw error;
	}
}

const getDescription = async () => {
	try{
		const resp = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1');
		return resp.json();
	}catch(error){
		throw error;
	}
}
const getVideosById = async (id) => {
	try{
		const resp = await fetch(`http://localhost:3500/videos/${id}`);
		return resp.json();
	}catch(error){
		throw error;
	}
}

export const getVideoDetail = async ({id}) => new Promise((resolve, reject) => {
	try{
		const video = getVideosById(id);

		if(!video) return reject({message:"No se ha encontrado el video ;("});
		if(video.description) return resolve(video);
		
		return getDescription().then(description => {
			
			video.description = description.join();
			
			
			return resolve(video);
		});
		
	}catch(error){
		throw error;
	}
});