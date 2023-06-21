import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

// const scroll = document.querySelector("body")

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (searchName) {
      fetchImages(searchName, currentPage);
    }
  }, [searchName, currentPage]);

  const handleFormSubmit = (searchName) => {
    if (searchName.trim() === '') {
      alert('Please write something.');
      return;
    }

    setSearchName(searchName);
    setImages([]);
    setCurrentPage(1);
  };

  const fetchImages = (searchName, page) => {
    setLoading(true);

    fetch(
      `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35867902-bd768db4cb6d1ffc0364d5f36&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.hits.length === 0) {
          alert('Error! Cannot find images.');
        }

        if (page === 1) {
          setImages(data.hits);
        } else {
          setImages((prevImages) => [...prevImages, ...data.hits]);
        }
      })
      .catch((error) => {
        alert('Images not found: ' + error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  const openModal = (images) => {
    setSelectedImage(images);
    setModalOpen(true);
    // scroll.classList.add('stopScroll');
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  }

  useEffect(() => {
    if (modalOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [modalOpen]);

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && images.length % 12 === 0 && (
        <Button onLoadMore={handleLoadMore} />
      )}

      <Loader loading={loading} />

      {modalOpen && (
        <Modal active={modalOpen} setActive={closeModal}>
          <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        </Modal>
      )}
    </div>
  );
};

export default App;








// import { useState, useEffect } from 'react';
// import SearchBar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';





// const App = () => {
//   const [searchName, setSearchName] = useState('');
//   const [images, setImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);  
  
//   useEffect(() =>{
//     if(searchName){
//       fetchImages(searchName,currentPage)
//     }  
//     },[searchName,currentPage]);

// const  handleFormSubmit = (searchName) => {
//     if (searchName.trim() === '') {
//       alert('Please, write');
//       return;
//     }

//     setSearchName(searchName);
//     setImages([]);
//     setCurrentPage(1)
    
//   };

  

  

  
//   const fetchImages = (searchName, page) => {
//     setLoading({loading: true})

//     fetch(
//       `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35867902-bd768db4cb6d1ffc0364d5f36&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then((response) => response.json())
//       .then((data) => {

//         if (data.hits.length === 0) {
//           alert('Error! Cannot find');
//         }

//         if (page === 1) {
//           setImages(data.hits);
//         } else {
//           setImages((prevImages) => [...prevImages, ...data.hits])
//       }})
//       .catch((error) => {
//         alert('Images not found' + error);
//       });

//       // .finally(() => {
//       // setLoading(false)  
//       // }
//       // )
  

//   const handleLoadMore = () => {
    
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//   };

// // useEffect(() => {
// //   const handleKeyDown = (event) => {
// //     if (event.keyCode === 27) {
// //       closeModal();
// //     }
// //   }

// //   window.addEventListener("keydown", handleKeyDown)

// //   return() => {
// //     window.removeEventListener("keydown", handleKeyDown)
// //   }
// // }, [])


//   const openModal = () => {
//     setSelectedImage(images);
//     setModalOpen(true)
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     modalOpen(false)
//   };

 

//     return (
//       <div>
//         <SearchBar onSubmit={handleFormSubmit} />
//         {images.length > 0 && (
          
//             <ImageGallery images={images}  openModal={openModal}/>
          
//             )}
//             {images.length > 0 && images.length % 12 === 0 &&
//             (
            
//             <Button onLoadMore={handleLoadMore} />
        
//         )}
      
        

//         <Loader loading={loading}/>

//         {modalOpen && (
//           <Modal active={modalOpen} setActive={closeModal}>
//             <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
//           </Modal>
//         )}
        
//         {/* <Loader searchName={searchName} /> */}
//       </div>
//     );
//   }
// }
// export default App