import React from "react";
import html2canvas from 'html2canvas';

class Footer extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event){
        if(event.target.name === "print"){ 
            window.print();
        }
        else if (event.target.name === "save"){ 
            html2canvas(document.querySelector(".motivation-background-img"), {allowTaint: true, removeContainer: true}).then(canvas => {
                document.body.appendChild(canvas)
                console.log(canvas);
            });
        }
    }

    render(){
        return(
            <div className="footer">
                <button name="print" onClick={this.handleClick} className="print_btn"><i className="fa fa-print"></i> Print</button>
                <button name="save" onClick={this.handleClick} className="save_btn"><i className="fa fa-floppy-o"></i> Save</button>
            </div>
        )
    }
}

export default Footer;