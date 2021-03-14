import React, { Component } from "react"
import './App.css';
import Cardlist from "../Cardlist/Cardlist";
import Title from "../Title/Title";
import SearchBox from "../SearchBox/SearchBox";
import Loading from "../Loading/Loading";
import Scroll from "../Scroll/Scroll";
import Header from "../Header/Header";
import Space from "../Space/Space";
import Slider from "../Slider/Slider";



class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchFieald: "",
      sliderDisplay: "none",
      sliderContent: [],
      activeIndex: 0
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onRobotClick = this.onRobotClick.bind(this);
    this.onPopUpClick = this.onPopUpClick.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({users: users})
    })
  }

  onSearchChange(event) {
    this.setState({searchFieald: event.target.value});
  }

 
  
  onRobotClick(event) {
    this.setState({sliderDisplay: "block"});
    
    this.setState({activeIndex: event.currentTarget.id});

    // this.setState({sliderContent: this.state.users[event.currentTarget.id-1]})

    this.setState({sliderContent: this.state.users})


    console.log(this.state.users[event.currentTarget.id-1])
  }


  

  onPopUpClick(event) {
    if (event.target === event.currentTarget) {
      this.setState({sliderDisplay: "none"});
    }
  }

  render() {
    const { users, searchFieald, sliderDisplay, sliderContent, activeIndex } = this.state;

    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchFieald.toLowerCase());
    })

    if (users.length === 0) {
      return(
        <div className="home">
          <Header>
            <Title />
            <SearchBox searchChange={this.onSearchChange}/>
          </Header>
          <Space height="210px" />
          <Scroll>
            <Loading position="center" />
          </Scroll>
        </div>
      ); 
    }
    else {
      return(
        <div className="home">
          <Header>
            <Title />
            <SearchBox searchChange={this.onSearchChange}/>
          </Header>
          <Space height="210px" />
          <Scroll>
            <Cardlist users={filteredUsers} popUpShow={this.onRobotClick} />
          </Scroll>
          <Slider 
            display={sliderDisplay} 
            content={sliderContent} 
            activeIndex={activeIndex}
            popUpHide={this.onPopUpClick} 
          />
        </div>
      );
    }
  }
}

export default App;
