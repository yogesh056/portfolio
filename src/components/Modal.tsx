import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { stateType } from "../modals";

export default function Modal() {
  const state = useSelector((state: stateType) => state);
  const {
    modal: { showModal },
  } = state;
  const dispatch = useDispatch();

  return (
    <>
      <div className="wave-container align-center">
        <span
          className="wave"
          onClick={() => dispatch({ type: "toggleModal" })}
        >
          👋
        </span>
      </div>
      <div className={showModal ? "modal modal-open" : "modal"} id="modal">
        <div
          className={
            showModal ? "modal-content modal-content-open" : "modal-content"
          }
        >
          <a
            href="#"
            className="modal-close"
            title="Close Modal"
            onClick={() => dispatch({ type: "toggleModal" })}
          >
            X
          </a>
          <h3>
            {" "}
            Hey there <span className="wave">👋</span>
          </h3>
          <div className="modal-area">
            <p>Modal Content Here</p>
          </div>
        </div>
      </div>
    </>
  );
}
