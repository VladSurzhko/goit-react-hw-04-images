import { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export default class Loader extends Component { 

   state = {
    images: []
}
    
componentDidLoader(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;
    if (prevName !== nextName) {
        console.log('name change')

    
    }
    }

    render() {
        const { images, loading } = this.state
        const {searchName} = this.props

        return (
            <div>
                {loading && <div>
                <InfinitySpin 
                 width='200'
                color="#4fa94d"
                /></div>}
                {!searchName && <div></div>}
                {images && <div>{ images.nextName}</div>}
            </div>
        )
    }
}