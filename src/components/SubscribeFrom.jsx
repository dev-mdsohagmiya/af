import React from "react";

export default function SubscribeFrom() {
  return (
    <>
      <div>
        <div>
          <form>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your Email"
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button">
                  Send
                </button>
              </div>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                i agree all term and condition
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
