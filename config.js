    const token = "IGQVJXNWZAZAcDlhN0RlUXphVDkyY1BRMFYxV3NUY0JiMEFMVDhqcEY2MzNaU19EZAkQtYUtSbmlxQ0JTX09sTDVwN2hWS3BKNkltTWlwVXdFRE1BWW5nQUNvRFlKSkE2Uk9GbEJwSUJHLV91bzdnMDNNTwZDZD";
    const numPosts = 24;
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=${numPosts}`)
        .then(response => response.json())
        .then(data => {
            const posts = data.data;
            const instafeed = document.getElementById("instafeed");
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];
                let html = '';
                if (post.media_type === 'VIDEO') {
                    html += '<div class="post-video"><video src="' + post.media_url + '" poster="' + post.thumbnail_url + '" controls></video></div>';
                } else {
                    html += '<img src="' + post.media_url + '" class="post-image">';
                }
                html += '<p>' + post.caption + '</p>';
                html = '<div class="post">' + html + '</div>';
                instafeed.innerHTML += html;
            }
        })
        .catch(error => console.error(error));
