import React from "react";
import ReactTV from "react-tv";
import { withNavigation, withFocusable } from "react-tv-navigation";

const Poster = ({ focused, setFocus, focusPath, src }) => {
  focused = focused ? "focused" : "unfocused";
  return (
    <div
      className="poster"
      onClick={() => {
        setFocus();
      }}
    >
      <img src={src} />
    </div>
  );
};

const FocusablePoster = withFocusable(Poster);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data });
      })
      .catch(console.log);
  }

  render() {
    console.log(this.state.items);
    return (
      <div>
        <div className="title">
          <img
            src={"https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"}
          />
        </div>
        <div className="focus-info">
          O curso selecionado é: {this.props.currentFocusPath}
        </div>
        <div className="boxSlide">
          <button type="button" class="my-5 btn neumorphic-btn">
            {"<"}
          </button>
          <div className="posters">
            <FocusablePoster
              focusPath="focusable-poster-1"
              src={
                "https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg"
              }
            />
            <FocusablePoster
              focusPath="focusable-poster-2"
              src={
                "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
              }
            />
            <FocusablePoster
              focusPath="focusable-poster-3"
              src={
                "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
              }
            />
          </div>
          <button type="button" class="my-5 btn neumorphic-btn">
            {">"}
          </button>
        </div>
      </div>
    );
  }
}

const AppWithNavigation = withNavigation(App);

ReactTV.render(<AppWithNavigation />, document.querySelector("#root"));
