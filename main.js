// const content = document.querySelector('svg');
// content.parentNode.removeChild(content);

// document.title = `${1} ${document.title}`;
// localStorage.setItem('counter', '0');
// let x = parseInt(localStorage.getItem('counter'));
// console.log('I ran... so far away... I just rannnnnn');
// console.log(chrome.tab.query);
const linkList = document.querySelectorAll('link');

for(let i =0; i < linkList.length; i++){
    const ele = linkList[i];
    ele.href = "https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg";
}

let itr = document.body;
const dogeArr=["https://lh3.googleusercontent.com/-sZmu6r9Q-_o/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcQMTxCk2hFfewZxTuYB3ZUdFXt3A/s48-c/photo.jpg","https://lh3.googleusercontent.com/-EWwEUip-NEM/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re8ux0dfUWhDv_YNP-EumNpyYHXog/s48-c/photo.jpg","https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7SfnPJvIbRhI3UeXVooazA14-U3KqolNsUrxsgCXTvdKeZVV8A","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJhvQNq03aWjMawTTphz221K1bWYrFQ9eZFSsIr1sIOx9D43IJQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjOtwgy7YtWcqykLZdPMZfCMXcoQ5yt_W9ZK83wIgJd1uwF3X","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPikYyXRGnsczJ_SYOtNuj4D6IajVwS-mZNzS5DDym8kq7vHVK6g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFsIEO8XqshsueXgYP8CUtVc7PJQ4S3bO4aEFmp03LT7jnqtj7g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5fG-limpLUIuH4DPhC8DYxJPQMVC3jmm5Rxq6LOrAUuBf1W_MA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0mcd82tsaRban3o9Y0RxR9cyPj-wHpWlAMdPvugV5CoSLNKV","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tGdEjEsgeDwqJk5srcPQIlu_pxQdpGkcbJNQ9ipjMdhbSjpCuQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIs5pQoC5N_Seg5ButOciawpDLqFKZFKcaNtwB29cKBWhNa-sc","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIe0rgHD5_gnkToUJrlYHaWEKx1Q5Loe8QYTqt4n2paQ-2tAluTA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0fuV5aMHkKEargURb2GoYelQAFNq8u19BWjMxO6rJij24efewg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhqnTe2dx4zAfeU65hpVmh9t_KJan5hN3_-2EMeavzmPPmKBd","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oIQsMldjhDJ9wr486iRPK7X5_uWEtrxO5yc0Grp7141wVifl","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAkSRDfrfuPK5zTZ9IH_qf3G-XsG3F111JYVtlljqp7HJnAS8aQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnP81izroLkBDGnNCiVV4MW7sBuyCTucguTIKwVijAB8otNJ9b","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYyv-9GuijRSIFdR8Rd3SGXt3K0aEE407-hNvQQxufQVCLDl8","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3sf9l3Ugc8bJGFVBWdwRTyn8MEKU_bOCULgh9fzPao471mp7u","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjWyCNVe60dJTtA8R3dRfXqbg-WBGywIAfUFjvHbzYOzxawLr4Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXAxWvI55ig3QxL0JNuky5OjonBDqB7X8UwSOE6G5chwgiVbC","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuC4YVCYGE4O-q6DG8KLwkEntg-k0DE1it8MzgZVv6ozGQyuoO","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJojerMrB3l_8BtoopxHy_xDETMydYqt5nuuWsKa7e586eEJlB","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PSjwL9fFi9dZ0WDLwvGwIjZge3zA-mYdJgJIxVU_tnmZWWEf","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchUGcy-_XgacEjRFU9y7ntduo1JaeOkzPhUik2mjbmQsWsFHVyQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DfSiOumWo-pTL3gKLI4FvUTHHsc1-NKTEs4FPEOzxmhD1DeaYg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBv1M2WJZ-6pTCxWNpjKkMp6a9eBbzWY20xXFOe4WT4s4YJP2HJA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZaoMtozHcgPexucdtFM17IUd3iGvsugIWHkIGAeXxNrv8jP7","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSj6Kn1pDDKyAbZbFa0M233_GefXlXMIS8htOCeZCECtu0TuRc","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIBW0zaSB-FMoF8kz84j8Ct56VEIcue88YO3fSx_YrqfTZcJ0","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-AdB-SGCwl4RPQTLMXVtVgMrY6lcf1vZjxGIrk5saz3WkRyR","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlT7eSfiY2Hz3iu6Fry3Z-Aac7b1hiFJciBtuIaQgx7oSBJuCivg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWuaHj72MH5ODwbWGawVZOU7qK2RfxJM4Y3wbkle4GAkimQW3Yw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqhV9hHpFz29hWOU17wtBGx3cM07okPbaTMaWqX7ynmh_qN9ZmA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWgT0_gLmI90Lkro4NRJQaNZlfBs0-zWEREcRAly5F0ZseYWt","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02Bb9VlkmMuGHC6qAyFuSEC9il0fn-Ol0QmFJc75u7wCTjHst","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCNp1rZ4CnjS8l6MYVt4E_aC_sFTdhMIHbcP9h42KV2ADkXC-pQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNcPmJWrtRrHY2A9HWeNrOrZuSWd0MJmSpB6cahOQaW693Vk0","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQifcLt3sRXhi9RNJK39_Xr1kW8nKKpBXdjagFbt0cPQ1zZf-eD","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv16a3W83IbR8GnKCJ0xk_r_ZKPduCkvcLIVokvpAbDGrlVn91VQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0mSJVrhsE7KNp54wKndzdzKuB11-r9lwr-GHNo0vIHNu8wNX","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNE8S5Aba6dIgLGTAgKNBEUQRpN_dS8yS7nfBnO7hfceDwR4p","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaTs0TZaLydWpH4Bpb__8fVW2zE9kFEv1nZLa_ZpgQtvLR4Dt","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvkoeenUi4bZWPYrzaiKVDra0LHYpWUx2X-xWLTuqkKT-G_FP","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6hNheplAY22ZNcIhpKDcLCvOVo5ywtq5q6Ux5OpLfaDB_8e-","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNM7hJSJc89p4JS2-nHbkWXfgpNf5MFK0A5WXUK7JAoD7uJu1tw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAAMKmX14UZ1k9Plds3q1H0voeBuEdEKKFfxJUmK3zqpNdP6M","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5byGhtIDnuKzUq5z0BHf0GEZMcHxlO1kaqGhd76kUg_QkYt8v","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlmSFBDoUm_8lbr6V58MqsAMjxbQ68B7-3RkA6bS2PfmFTLkbS","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1unsz_D0nIvGHi0VXt07nYFkwIhzcKrOyNi_YChxQYgvE_A8T","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIxMvY27HDgIx_1Y_TBuWzLGNfwAjvAflGWUH6BZnZnEMEft2Mg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOW3B-jolMXAVh7pg38dyx9zzWtEHOs33JMYF-Wsu9y5hJjrtXA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOyAX-S8pfIq400if_-OgOlNQfD1a_E4wzcS3chu5ck9F66tFrw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTna-9bnweZ-IKvpoDzGnTFnHn_Ok5IMZfUzVHYZwAI6ltRlvF8g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHnK6Z6-2SjZhUFBB7R_Sg75EAkIPaluk5lhStGfypBV7obSf","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLTwHyz0Y5coNp6pvc_jNJWV0Yhr0opbnhEC1jLLKRZ7-scwq1A","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaH3A6ARyuzeB7IYaO-O8vq5HIzv0uivqcbPWSvv0wsyNz5tMp","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1GbY4VAt1QKBgt08x07tS67ZPPtwPkORYklm4FMZcU5j0Fyvt","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKbMgQWFq9HYaC3a3QKbChipLk-LI7BqxT6vuKBsykyTy29Wgy","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmEjXMFk9cQrXlmL1o5v_RH1TJl8VXTeIM3Py98MGZfJSAvHVvg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtUMcoUTSJ_DCPxDhw84AOvDNsA33MRSdQI_bZpikPv2nV7tj","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuEmyPCF1eEEGBUy0MMRoEBp4fzbYaBtLw44xMISs-DCVICwq","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkDU0oAgrAHCQE0qapcgXme8G7MZ6vgaPFp0VNN2UnAQdlwGa","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1mrVUQaXdxm_iDi9x-gOeHCzDJFFbZfC543vvnyKpNoP5b7k5g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YMiLsK3UwhtIqXOuGpH4zz4_BvSi4vflIwTu-vLGilzU-27A","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0i8oQBpr6Y-dD9A9HEAHA8o6Ft4abAWKHMa7S9Px9VeuPHwM7w","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47Nosq5bylWWbIHc9ZBBD5BAWjBMmcHT_xqF1x_73EYNQ1DLQLQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVmwrQtXdO-UuUvGf1Srq_jLUQcFTmAlrPewcyF3QNQ0pnO52","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMSjtCzQuU5vYAD3tweJ79ajsvnmIrk6pnZvj58qJJEgaMbz55A","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPypNH9DKEOmdeiSVqiZovA-WHVwYlEgAkA2fADut7W2V0MnvhKA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRryol_13QImEZbAu_-Ke3KWHuw1OnY1cOoN_-cUhPro6u5ivTRlw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_0vELYlXXDi1t6NYuRUlOOyCAiZ6sn24-aFMfMd99pBHXxws","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6IXjt325GEYHisDtW39eWsR_34Kl_fxQJ4EcnAmBSTGhbM_l-Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVkpYEAKvAXp7IuLcVcPnrQGYFn497m20q610sdid4Uq2gIaW6Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRi7kfj7RxCpzTTYPP_W0kCCjsmUHgJZMbNy7R9T-zL0qqIuu64g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRptAXDT0B5yTXaV4M6iidRuCMXZGIgcMiZKmXykSGQiYKq-qO","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoPT1bGlM0fkM5TaomrziEf6cGyw9hX7Y_n_cpL8qOgBO5_1mUw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVntRa3mSLW6PL3MezQ6v7SabAOasild878WYbyYWZIJG5Gg46Jg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulPe9EwQO-bkjimMZ5d8hbPUgerpbhn9ZK5EBAc89U6p6WWiaYg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILzQqSzapYW-dk9Mvr14hL7Z3HCkccRqmqQOaqP5B0fm_Sk9F","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUEdf7ERJ3v21dU1Qe1kzRJpA8hDxQYO3jViC9FLWOWE4zXIW2w","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUzMTbINt1Nu9yazsnF34ihwNVrJC0hVs1dbY0NVgWvShjCu7","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKE-ACXE0vdzdBg8u5vIoG1rLfyeMo70e6PGlsWZNA87Lfzyh5Uw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Enx9vZyVMDPWUplCV-TefUDy1Exall6Z-013RdSg6XHy8HOVng","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRi7kfj7RxCpzTTYPP_W0kCCjsmUHgJZMbNy7R9T-zL0qqIuu64g","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoPT1bGlM0fkM5TaomrziEf6cGyw9hX7Y_n_cpL8qOgBO5_1mUw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulPe9EwQO-bkjimMZ5d8hbPUgerpbhn9ZK5EBAc89U6p6WWiaYg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUzMTbINt1Nu9yazsnF34ihwNVrJC0hVs1dbY0NVgWvShjCu7","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVVcLW7RjvOnBpnPRAx7MU-0uKBC4vufM7Nhj_jCbbbc0Z389Sg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrHMCzMOmkzlBOq1iYvBajp_8X7POf8Y-Nvf3bMZaMs1sLC4_","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuh_caf4L6RYXqI4b1KwaLKhfLWfwy16iU_-YTmvtr-PUc9xc3Kw"]

visit(itr);

function visit(itr){
    if(!itr) return;
    if(itr.srcset){
        itr.srcset = dogeArr[Math.floor(Math.random()*dogeArr.length)];
    }
    if(itr.src){
        itr.src = dogeArr[Math.floor(Math.random()*dogeArr.length)];
    }
    if(itr.href){
        itr.href = dogeArr[Math.floor(Math.random()*dogeArr.length)];
    }
    if(itr.childNodes){
        itr.childNodes.forEach(child => visit(child));
    }
}

// const title = document.querySelector('title');
// title.innerHTML = "Doge Doge Doge";
let now = new Date();

// console.log('document', typeof document.title, document.title);

// function runPost() {
//         const postData = {created_by : 'you', message : document.title};
//         // put post request in
//         return fetch('https://slack-server.elasticbeanstalk.com/messages', {
//         mode: 'cors',
//         cache: 'no-cache',
//         redirect: 'follow',
//         referrer: 'no-referer',
//         credentials: 'same-origin', // 'include', default: 'omit'
//         method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//         body: JSON.stringify(postData), // Coordinate the body type with 'Content-Type'
//         headers: new Headers({
//           'Content-Type': 'application/json'
//         }),
//       })
//       .then(response => {
        
//         console.log(response.json());
//       })
//       }

// runPost();

      document.title = `${now.getHours()}${now.getMinutes()} ${document.title}`