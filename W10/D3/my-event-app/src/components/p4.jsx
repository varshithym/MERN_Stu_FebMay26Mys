// Synthetic event vs Native DOM events
// synthetic Event : 
// A wrapper created by react around the browsers native event
// Gives a consistent API across browsers
// Works similarly to native DOM events
// Still allows acess to the origonal browser event via
// event.nativeEvent



// Why react use Syntheetic events
// to consistent Event handling
// to simplify cross browser differences
// To integrate smoothly with React's event system
// How Synthetic event works:
// Components renders: A button appears on the screen
// handleClick is defined but is not executed
// User Clicks the button: 
// Browser creates a native click event
// React wraps that native event in a syntheticEvent
// React passes the Synthetic Event to handleClick
// event refers to the synthetic event
// event.target gives us HTML elememnt

