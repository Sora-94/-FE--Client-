module.exports = {
    plugins: [
      require('postcss-prefix-selector')({
        prefix: '.bookingPage', // Tiền tố mà bạn muốn thêm vào các selector
        exclude: ['body', 'html'] // Loại trừ các selector mà bạn không muốn thêm tiền tố
      })
    ],
  };
  