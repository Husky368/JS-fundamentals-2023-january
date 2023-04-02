function followers(input) {
    let janeFacebook = new Map();
    for (let line of input) {
        let info = line.split(' ');
        let command = info.shift();
        if (command == 'Log') {
            break;
        }
        if (command == 'New') {
            let trash = info.shift();
            let username = info.shift();
            if (!janeFacebook.has(username)) {
                let innerMap = new Map();
                innerMap.set('Comments', 0)
                innerMap.set('Likes', 0)
                janeFacebook.set(username, innerMap);
            }
        }
        else if (command == 'Like:') {
            let usernameLike = info.shift();
            usernameLike = usernameLike.split('');
            usernameLike.splice(usernameLike.length - 1, 1);
            usernameLike = usernameLike.join('');
            let likeCount = Number(info.shift());
            if (janeFacebook.has(usernameLike)) {
                let innerMapLike = janeFacebook.get(usernameLike);
                if (innerMapLike.has('Likes')) {
                    let likesDone = innerMapLike.get('Likes')
                    likeCount += likesDone
                    innerMapLike.set('Likes', likeCount)
                }
                else {
                    innerMapLike.set('Likes', likeCount)
                }
                janeFacebook.set(usernameLike, innerMapLike)
            }
            else {
                let innerMapLikee = new Map();
                innerMapLikee.set('Likes', likeCount);
                janeFacebook.set(usernameLike, innerMapLikee)
            }
        }
        else if (command == 'Comment:') {
            let nameComment = info.shift();
            if (janeFacebook.has(nameComment)) {
                let innerMapComment = janeFacebook.get(nameComment);
                if (innerMapComment.has('Comments')) {
                    let commentsDone = innerMapComment.get('Comments');
                    commentsDone += 1;
                    innerMapComment.set('Comments', commentsDone)
                }
                else {
                    innerMapComment.set('Comments', 1)
                }
                janeFacebook.set(nameComment, innerMapComment)
            }
            else {
                let innerMapCommentt = new Map();
                innerMapCommentt.set('Comments', 1)
                janeFacebook.set(nameComment, innerMapCommentt)
            }
        }
        else if (command == 'Blocked:') {
            let blockedName = info.shift();
            if (janeFacebook.has(blockedName)) {
                janeFacebook.delete(blockedName)
            }
            else {
                console.log(`${blockedName} doesn't exist.`)
            }
        }
    }
    let array = Array.from(janeFacebook)
    let countAll = array.length;
    console.log(`${countAll} followers`)
    for (let user of array) {
        let userArr = Array.from(user[1])
        let nameUser = user.shift();
        let number = 0;
        if (user.length != 0) {
            for (const el of userArr) {
                number += el[1]
            }
        }
        console.log(`${nameUser}: ${number}`)
    }
} followers(["New follower: George",
"Like: George: 5",
"New follower: George",
"Log out"])

