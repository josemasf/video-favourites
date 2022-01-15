import React from "react";
import PropTypes from 'prop-types';

const Header = ({onClickAdd}) => (
    <div className="header-content">
        <div className="header-title-text" >Mis vídeos favoritos</div>
        <input type="button" value="Añadir Video" className="header-button-add" onClick={onClickAdd} />
    </div>
);

Header.propTypes = {
    onClickAdd: PropTypes.func.isRequired
};


export default Header;