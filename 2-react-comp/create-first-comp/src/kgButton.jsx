function KgButton() {

    let num = Math.random() * 100;

    let click = () => {
        console.log('Button clicked');
   
    }

    
    return <h1 style={{'background-color':'#776690'}} > <button style={{'background-color':'#089090'}} onClick={click}>click me! {Math.round(num)} </button></h1>

}

export default KgButton;