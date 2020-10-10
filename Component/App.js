import React from "react";
import DefaultBn from "./DefaultBtn";

function App() {
  return (
    <div>
      <div className="container">
        <p>{"<button />"}</p>
        <DefaultBn >
          Default
        </DefaultBn>
      </div>
      <div className="container">
        <p>{`<button variant="outline" />`}</p>
        <DefaultBn variant="outline" disabledShadow>
          Default
        </DefaultBn>
      </div>
      <div className="container">
        <p>{`<button variant="text" />`}</p>
        <DefaultBn variant="text" disabledShadow="none">
          Default
        </DefaultBn>
      </div>
      <div className="container">
        <p>{`<button disabledShadow />`}</p>
        <DefaultBn >
          Default
        </DefaultBn>
      </div>
      <div className="container">
        <p>{`<button disabled />`}</p>
        <DefaultBn disabled="yes" disabledShadow="none">
          Desabled
        </DefaultBn>
      </div>
      <div className="wrapper">
        <div className="container">
          <p>{`<button startIcon="local_grocery_store" />`}</p>
          <DefaultBn color="primary" size="lg" startIcon="local_grocery_store" disabledShadow="none">
            Default
          </DefaultBn>
        </div>
        <div className="container">
          <p>{`<button endIcon="local_grocery_store" />`}</p>
          <DefaultBn color="primary" size="lg" endIcon="local_grocery_store">
            Default
          </DefaultBn>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <p>{`<button size="sm" />`}</p>
          <DefaultBn color="primary" size="sm">
            Default
          </DefaultBn>
        </div>
        <div className="container">
          <p>{`<button size="md" />`}</p>
          <DefaultBn color="primary" size="md">
            Default
          </DefaultBn>
        </div>
        <div className="container">
          <p>{`<button sise="lg" />`}</p>
          <DefaultBn color="primary" size="lg">
            Default
          </DefaultBn>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <p>{`<button default />`}</p>
          <DefaultBn>
            Default
          </DefaultBn>
        </div>
        <div className="container">
          <p>{`<button color="primary"/>`}</p>
          <DefaultBn color="primary">
            Default
          </DefaultBn>
        </div>
        <div className="container">
          <p>{`<button color="secondary" />`}</p>
          <DefaultBn color="secondary">
            Default
          </DefaultBn>
        </div>
        <div className="container">
          <p>{`<button color="danger" />`}</p>
          <DefaultBn color="danger">
            Default
          </DefaultBn>
        </div>
      </div>
    </div>
  )
}

export default App;
