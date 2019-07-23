import React from 'react' 
import './SlideS.css' 
import ImgList from './ImgList'
import SlideBt from './SlideBt'

class SlideShow extends React.Component{
    constructor(){
        super()
        this.state = {
            currentImg: ImgList, 
            url: "1.jpg"
        }
        this.handleNextImg = this.handleNextImg.bind(this)
    }
    componentDidMount(){
        console.log("Click!!!", this.state.currentImg.length)
    }
    handleNextImg(id){
        console.log("Click!!!", id)
        this.setState(prevState => {            
            const updateImg = prevState.currentImg.map(image => {
                if(image.id === id){
                    if (image.id === this.state.currentImg.length){
                        image.id = 1
                    }else{
                        image.id = image.id + 1     
                    }                           
                }
                return image
            })
            const imgName = id + ".jpg" 
            return {
                currentImg: updateImg,
                url: imgName
            }
        })    
    }
    render(){
        const imgUrl = this.state.currentImg.map(items => <SlideBt key={items.id} items = {items} 
            handleNextImg={this.handleNextImg}/>) 
            
        return(
            <div>    
                <img src={this.state.url}  alt="Error img"/> 
                               
                {imgUrl}
                
            </div>   
        )
    }

}

 
export default SlideShow;
