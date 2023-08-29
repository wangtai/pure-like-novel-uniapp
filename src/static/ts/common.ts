export const goToBook = () => {
  uni.navigateTo({
    url: '/pages/description/description'
  }).then(r => console.log(r));
};
export const goToNovel = () => {
  uni.navigateTo({
    url: '/pages/novel/novel'
  }).then(r => console.log(r));
};
