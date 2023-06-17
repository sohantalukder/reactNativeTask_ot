import Share from 'react-native-share';
export const myCustomShare = async item => {
  const shareOptions = {
    message: item?.name,
    url: item?.image,
  };

  try {
    await Share.open(shareOptions);
  } catch (error) {
    console.log(error.message);
  }
};
