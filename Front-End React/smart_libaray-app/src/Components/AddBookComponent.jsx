import React, {Component } from 'react';
import BookService from "../Service/BookService";
class AddBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            isbn:this.props.match.params.isbn,
            name:'',
            author:'',
            edition:'',
            cover_url:null,
            pdf_url:null,
            desctiption:'',
            selectedFile:null,
            percentage:0
        }
        this.changeIsbnHandler =this.changeIsbnHandler.bind(this);
        this.changeNameHandler =this.changeNameHandler.bind(this);
        this.changeAuthorHandler=this.changeAuthorHandler.bind(this);
        this.changeEditionHandler=this.changeEditionHandler.bind(this);
        this.changeCoverHandler=this.changeCoverHandler.bind(this);
        this.changePdfHandler =this.changePdfHandler.bind(this);
        this.changeDesHandler=this.changeDesHandler.bind(this);
        this.save_UpdateBook =this.save_UpdateBook.bind(this);
 
       

    }

    componentDidMount(){
        if(this.state.isbn=='_add'){
            return;
        }else{
           BookService.getBookById(this.state.isbn).then((res)=>{
                let Book =res.data;
                this.setState({
                    name:Book.name,
                   author:Book.author,
                   edition:Book.edition,
                   cover_url:Book.cover_url,
                   pdf_url:Book.pdf_url,
                   desctiption:Book.desctiption
                    });
            })
        }
        
    }

 
    

    save_UpdateBook=(e)=>{
         
        e.preventDefault();
        let Book={ 
        name:this.state.name,
        author:this.state.author,
        edition:this.state.edition,
        cover_url:this.state.cover_url.name,
        pdf_url:this.state.pdf_url.name,
        desctiption:this.state.desctiption};
        console.log('Book=>'+JSON.stringify(Book));
    

     

        const data = new FormData() 
        data.append('file', this.state.cover_url)
        console.warn(this.state.cover_url);
       

        BookService.upload(data)
        .then(res => { // then print response status
            console.warn(res);
        })


        const dataf = new FormData() 
        dataf.append('file', this.state.pdf_url)
        console.warn(this.state.pdf_url);
       

        BookService.uploadf(dataf)
        .then(res => { // then print response status
            console.warn(res);
        })
   
        if(this.state.isbn=='_add'){
            BookService.createBook(Book).then(res=>{
                this.props.history.push('/succss')
               
            });
        }else{
           BookService.updateBook(Book,this.state.isbn).then(req=>{
                this.props.history.push('/');
            });
        }
       
    }
 
     option={
onUploadProgress:(event) =>{
 const{loaded,total}=event;
 let precent=Math.floor((loaded*100)/total)
 console.log(`${loaded}kb of ${total}kb | ${precent}%`);
}
    }
    changeIsbnHandler=(event)=>{
        this.setState({isbn: event.target.value});
            }
    changeNameHandler=(event)=>{
        this.setState({name: event.target.value});
            }
    changeAuthorHandler=(event)=>{
        this.setState({author: event.target.value});
            }
    changeEditionHandler=(event)=>{
        this.setState({edition: event.target.value});
             }
    changeCoverHandler=(e)=>{
       this.setState({cover_url:e.target.files[0]}
        
        )
     
    
             }
    changePdfHandler=(e)=>{
        this.setState({pdf_url:e.target.files[0]});
            }
    changeDesHandler=(event)=>{
        this.setState({desctiption: event.target.value});
            }
             cancel(){
                this.props.history.push('/');
             }

             getTitle(){
                
                 if(this.state.isbn=='_add'){
                     return   <h3 className="text-center">Add Book</h3>
                 }else{
                    return <h3 className="text-center">Update Book</h3>
                 }
             }
    
    render() {
        return (
            
                <div>
                    <br />
                    <br />
               <div className="container">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3">
                         {
                             this.getTitle()
                         }
                           <div className="card-body">
                               <from>
                              
                                  
                                   <div className="form-group">
                                       <label >Book Name:</label>
                                       <input placeholder="Book Name" name="name" className="form-control" 
                                       value={this.state.name} onChange={this.changeNameHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label >Author   :</label>
                                       <input placeholder="Author " name="author" className="form-control" 
                                       value={this.state.author} onChange={this.changeAuthorHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label >Edition   :</label>
                                       <input placeholder="Edition " name="edition" className="form-control" 
                                       value={this.state.edition} onChange={this.changeEditionHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label >Book Cover   :</label>
                                       <input placeholder="Book Cover "   name="cover_url" className="form-control" type="file" id="formFile"
                                        onChange={this.changeCoverHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label >Book   :</label>
                                       <input placeholder="Book PDF " name="pdf_url" className="form-control" type="file" id="formFile"
                                       onChange={this.changePdfHandler}/>
                                   </div>
                                   <div className="form-group">
                                   <label >Description   :</label>
                                    <div class="input-group">
                                        <span class="input-group-text">With textarea</span>
                                        <textarea class="form-control" aria-label="With textarea" 
                                          value={this.state.desctiption} onChange={this.changeDesHandler}/>
                                     </div>
                                     </div>
                                   <br/>
                                   <br/>
                                    
                                   <div className="form-group">
                                      <button className="btn btn-success" onClick={this.save_UpdateBook.bind(this)}>
                                          Save
                                      </button>
                                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>
                                          Cancel
                                      </button>
                                      
                                   </div>
                               </from>
                           </div>
                       </div>
                   </div>

               </div>
                
            </div>
        );
    }
}

export default AddBookComponent;