const images = [
    '441080029_979061937555519_8970246245449057602_n.jpg',
    '441204445_979062024222177_2422888029088332655_n.jpg',
    '441214220_979061997555513_6621750781737181339_n.jpg',
    '441240482_979062034222176_1180413337598546147_n.jpg',
    '441298817_979062044222175_5943599546707189266_n.jpg',
    '441346449_979061890888857_3202685189283275297_n.jpg',
    '441350108_979061960888850_2120921753747661573_n.jpg',
    '441387818_979061840888862_262664719950143520_n.jpg',
  ];
  let currentIndex = 0;
  const imgContainer = document.querySelector('.image-container');
  const imgElement = imgContainer.querySelector('img');

  function showImage(index) {
    imgElement.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  showImage(currentIndex);