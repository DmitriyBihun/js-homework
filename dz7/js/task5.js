if (confirm('Почати тестування?')) {

   function showImage(img1, img2,img3, img4) {
      let rand = Math.floor(Math.random() * 4);
      let image;

      switch (rand) {
         case 0: image = img1;
            break;
         case 1: image = img2;
            break;
         case 2: image = img3;
            break;
         case 3: image = img4;
            break;
         default:
            break;
      }
      document.write(`<img src='${image}' alt='Example image.'>`)
   }

   showImage('img/img51.jpg', 'img/img52.jpg', 'img/img53.jpg', 'img/img54.jpg')
} 
