import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AddBooks } from '../../Actions/Books'

const BookForm = ({AddBooks}) =>{
    const history = useHistory()
    const [formData, setFormData] = useState({
        title: '',
        author:'',
        publisher:'',
        genre:'',
        price: '',
        availability:'',
        description:''
    })
    const [file, setFileData] = useState('')
    const {title,author,publisher,genre,price,availability,description} = formData
    
    const OnChange = e => setFormData({...formData, [e.target.name]: e.target.value })
   
    const onSubmit = e =>{
        e.preventDefault()
        AddBooks(title,author,publisher,genre,price,availability,description,file)
        history.push('/books')
    }

    
    return(
        <div>
            <h1 className="large text-primary">Add a Book</h1>
            <p className="lead"><i className="fas fa-book"></i> Add a Book to Sell</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="name" placeholder="Book Title" name="title"  value={title} onChange={e => OnChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="name"  placeholder="Author name" name="author"  value={author} onChange={e => OnChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="name" placeholder="Publisher Name" name="publisher"  value={publisher} onChange={e => OnChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="name" placeholder="Genre" value={genre} name="genre"  onChange={e => OnChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="phone" placeholder="Price" value={price} name="price"  onChange={e => OnChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="name" placeholder="Availability (In Stock or Out Of Stock)" value={availability} name="availability"  onChange={e => OnChange(e)}/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Description" maxLength="200" name="description" value={description} onChange={e => OnChange(e)}/>
                    </div>
                    <div className="form-group">
                    <label className="custom-file-upload">
                        <input type="file" accept="image/" onChange={(e) => setFileData(e.target.files[0])}/>
                        Custom Upload
                    </label>
                    <i className="fas fa-upload"></i>   
                    {file && (
                        <label>{'  '}{file.name}</label>
                    )}
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add a Book" />
                    
                </form>
        </div>
    )
}

export default connect(null, {AddBooks})(BookForm) 