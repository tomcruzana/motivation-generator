import React from "react";

class MotivationGenerator extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          quote : "",
          author: "",
          randomImage : "https://picsum.photos/550/300?random=1",
          allQuotes : []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        fetch("https://type.fit/api/quotes")
          .then(r => r.json())
          .then(d => {
              const [quotes] = [d]; //destructure quotes
              this.setState({allQuotes: quotes}); //modify state
          })
          .catch(err => console.log(err))
    }

    handleChange(event){
      const {name, value} = event.target; //destructure event.target
      this.setState({ [name] : value });
      console.log(value.length)
    }

    handleClick(event){
      event.preventDefault();
      let rnd = Math.floor(Math.random() * this.state.allQuotes.length);
      //this.setState({ randomImage : "https://picsum.photos/550/300?random=1" });
      this.setState({ 
        quote: this.state.allQuotes[rnd].text,
        author: "- " + this.state.allQuotes[rnd].author
      });
    }

  render(){
    return(
      <div>
        <form className="motivation-form">
          <label htmlFor="quote">Compose a quote: </label>
          <input 
              placeholder="Enter your quote here.." 
              name="quote" 
              type="text" 
              onChange={this.handleChange}
              value={this.state.quote}
              maxLength="180"
          />
          <br/>
          <label htmlFor="author">Author name: </label>
          <input 
              placeholder="Enter the name of author here.." 
              name="author" 
              type="text" 
              onChange={this.handleChange}
              value={this.state.author}
              maxLength="25"
          />
          <br/>
          <hr/>

          <h1>Generate a random quote</h1>
          <button onClick={this.handleClick}>Motivate me!</button>
          <hr/>
          
          <div className="motivation-background-img">
            <img src={this.state.randomImage} alt="background"/>
            <h2 className="quote-body quote-text">{this.state.quote}</h2>
            <h3 className="quote-author quote-text">{this.state.author}</h3>
          </div>
        </form>
      </div>
    )
  }
}

export default MotivationGenerator;