import React, {
    Component
} from 'react';
import Loading from './Loading';
import Item from './Item';
import Header from './Header';
import Footer from './Footer'
import Add from './Add';
import {
    getVideos
} from '../api'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            videos: null,
            error: null,
            showAdd: false
        }
        this.handleAdd = this.handleAdd.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
    }
    componentDidMount() {
        this.setState({
            isLoading: true
        });
        getVideos().then(data => {
            this.setState({
                isLoading: false,
                videos: data
            });
        })
    }
    handleAdd(e) {
        e.preventDefault();
        this.setState({showAdd:true});
      }
      handleCloseAdd(reload){
        return () => {
          if(reload){
            this.setState({ isLoading: true , showAdd:false});
            getVideos().then(data => this
              .setState({ videos: data, isLoading: false, showAdd:false }))
              .catch(error => this.setState({ error, isLoading: false, showAdd:false }));
          } else {
            this.setState({ showAdd: false });
          }
        }
    }
    render() {
        const {
            isLoading,
            videos
        } = this.state;
        if (isLoading)
            return ( < Loading msg = "cargando..." /> )
        return ( <React.Fragment >
            <Header  onClickAdd={this.handleAdd} />
            <div className = 'container' > {
                videos && videos.map((video, i) => {
                        return (<Item key = {i}  data = {video}/>)
                        })
                } 
                </div> 
                { this.state.showAdd && (<Add onClose={this.handleCloseAdd}/>)}
                <Footer />
                </React.Fragment>
            )
        }
    }

    export default List