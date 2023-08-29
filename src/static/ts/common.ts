export const goToBook = () => {
  uni.navigateTo({
    url: '/pages/description/description'
  }).then(r => console.log(r));
};