const fetchGet = (url, cfg) => {
    // const getUrl = 'http:127.0.0.1:3000' + url;
    return fetch(url, {
        method: 'get',
		headers: {
			'Accept': 'application/json',
    		'Content-Type': 'application/json'
		},
    }).then((res) => {
        if (res.status !== 200) {
            return;
        }

        return res.json();
    }).catch((err) => {
        console.log('Fetch Error : %S', err);
    })
}

export default fetchGet