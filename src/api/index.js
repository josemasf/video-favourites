export const getVideos = async () => {
	try{
		const resp = await fetch('http://localhost:3500/videos');
		return resp.json();
	}catch(error){
		throw error;
	}
}