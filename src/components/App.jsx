import { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';





export default class App extends Component {
  state = {
    searchName: '',
    photos: [],
    images: [],
    currentPage: 1,
    loading: false,
    selectedImage: null,
    modalOpen: false,

    
  };

  handleFormSubmit = (searchName) => {
    if (searchName.trim() === '') {
      alert('Please, write');
      return;
    }


    this.setState({ searchName, images: [], currentPage: 1 });
    
  };

  componentDidUpdate(prevProps, prevState) {
  const {searchName, currentPage} = this.state  
    

    if (prevState.searchName !== searchName 
      || prevState.currentPage !== currentPage) {

      this.fetchImages(searchName, currentPage);
      
    }
  }


  
  fetchImages = (searchName, page) => {
    this.setState({loading: true})

    fetch(
      `https://pixabay.com/api/?q=${searchName}&page=${page}&key=35867902-bd768db4cb6d1ffc0364d5f36&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((data) => {

        if (data.hits.length === 0) {
          alert('Error! Cannot find');
        }

        if (page === 1) {
          this.setState({ images: data.hits });
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }));
        }
        this.setState({ currentPage: page });
      })
      .catch((error) => {
        alert('Images not found' + error);
      });
  };

  handleLoadMore = () => {
    const { currentPage } = this.state;
    const nextPage = currentPage + 1;
    this.setState({currentPage: nextPage});
  };


  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  openModal = (image) => {
    this.setState({ modalOpen: true, selectedImage: image });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, selectedImage: null });
  };

  render() {
    const { images, loading, modalOpen, selectedImage } = this.state;
    // const [isOpen, onClose] = this.state

    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && (
          
            <ImageGallery images={images}  openModal={this.openModal}/>
          
            )}
            {images.length > 0 && images.length % 12 === 0 &&
            (
            
            <Button onLoadMore={this.handleLoadMore} />
        
        )}
      
        

        <Loader loading={loading}/>

        {modalOpen && (
          <Modal active={modalOpen} setActive={this.closeModal}>
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
          </Modal>
        )}
        
        {/* <Loader searchName={searchName} /> */}
      </div>
    );
  }
}