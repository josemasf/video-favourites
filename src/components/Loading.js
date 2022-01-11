import  {Component} from 'react';
import PropTypes from 'prop-types'

class Loading extends Component{
    render(){
        return (<div>{this.props.msg}</div>)
    }
}

Loading.propTypes = {
msg: PropTypes.string.isRequired
}
export default Loading