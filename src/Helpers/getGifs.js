export const getGifs = async ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=dHjsHPPkaAsIrApGHRXvULfIpeNHBCQt&limit=20`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));
    return gifs;
};