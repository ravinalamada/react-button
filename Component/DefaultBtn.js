import React from "react";

function DefaultBn() {
  return (
    <div>
      <div className="wrapper">
        <p>{"<button />"}</p>
        <button className="default">Default</button>
      </div>
      <div className="wrapper">
        <p>{`<button variant="outline" />`}</p>
        <button className={`variant="outline" && variantOutline`}>Default</button>
      </div>
      <div className="wrapper">
        <p>{`<button variant="text" />`}</p>
        <button className={`variant="text" && variantText`}>Default</button>
      </div>
      <div className="wrapper">
        <p>{`<button disabledShadow />`}</p>
        <button className={`disabledShadow && disabledShadow`}>Default</button>
      </div>
      <div className="wrapper">
        <p>{`<button disabled />`}</p>
        <button className={`disabled && disabled`}>Desabled</button>
      </div>
      <div className="container">
        <div className="wrapper">
          <p>{`<button startIcon="local_grocery_store" />`}</p>
          <button className={`startIcon="local_grocery_store" && startIcon`}>Default</button>
        </div>
        <div className="wrapper">
          <p>{`<button endIcon="local_grocery_store" />`}</p>
          <button className={`endIcon="local_grocery_store" && endIcon`}>Default</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <p>{`<button sise="sm" />`}</p>
          <button className={`size="sm" && sm`}>Default</button>
        </div>
        <div className="wrapper">
          <p>{`<button sise="md" />`}</p>
          <button className={`size="md" && md`}>Default</button>
        </div>
        <div className="wrapper">
          <p>{`<button sise="lg" />`}</p>
          <button className={`size=lg && lg`}>Default</button>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <p>{`<button default />`}</p>
          <button className={`color="default" && defaultColor`}>Default</button>
        </div>
        <div className="wrapper">
          <p>{`<button color="primary"/>`}</p>
          <button className={`color="primary" && primary`}>primary</button>
        </div>
        <div className="wrapper">
          <p>{`<button color="secondary" />`}</p>
          <button className={`color="secondary" && secondary`}>secondary</button>
        </div>
        <div className="wrapper">
          <p>{`<button color="danger" />`}</p>
          <button className={`color="danger" && danger`}>Danger</button>
        </div>
      </div>
      {/* <button className={`variant="text" && variantText`}>Default</button>
        <button className={`variant="text" && variantText`}>Default</button>
        <button className={`variant="text" && variantText`}>Default</button>
        <button className={`variant="text" && variantText`}>Default</button> */}
    </div>
  )
}

export default DefaultBn;
