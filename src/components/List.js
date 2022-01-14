import  React, {Component} from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer'
import {getVideos} from '../api'

class List extends Component{
    constructor(props){
        super(props)
        this.state ={
            isLoading: false, 
            videos: null
        }
    }
    componentDidMount(){
        this.setState({isLoading: true});
        getVideos().then(data =>{
            this.setState({isLoading:false, videos:data});
        })
        
        
    }
    render(){
        const {isLoading, videos} = this.state;
        if(isLoading)
            return (<Loading msg="cargando..." />)
        return (
            <React.Fragment>
                <Header />
                <div className='container'>
                    {
                        videos && videos.map((video, i)=>{
                            return (<Item key={i} data={video}/>)
                        })
                    }
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default List