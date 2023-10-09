//Properly written tests to check correct render of react components.
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Books from "../components/Books";
import SingleBook from "../components/SingleBook";
import Login from "../components/Login";
import HomePage from "../components/HomePage";



describe("<Books/>", () => {
    test("renders the Books component", () => {
        const books = render(<Books/>)
        expect(books).not.toBe(null);
    
    it ("contains a more info button", () => {
        const books = render(<Books/>)
        const button = books.getByText("MORE INFO")

        expect(button).toBeInTheDocument();
        
        fireEvent.click(button);
        //ByTestId find by data-testid attribute. Add data-testid to singlebook component. 
        const singleBookcomponent = getByTestId("single-book")
        expect(singleBookcomponent).toBeInTheDocument()
    });

    });
});

describe("<SingleBook/>", () => {
    test("renders the SingleBook component", () => {
        const Singlebook = render(<SingleBook/>)
        expect(Singlebook).not.toBe(null);
    });

    it("contains an add to cart button", () => {
        const Singlebook = render(<SingleBook/>)
        const button = Singlebook.getByText("ADD TO CART")

        expect(button).toHaveTextContent("ADD TO CART");
    
    //simulate click event on button
        //fireEvent.click(button)
    //onClick add to cart renders Account component 
    });

});

describe("<Login/>", () => {
    test("renders the Login component", () => {
        const login = render(<Login/>)
        expect(login).not.toBe(null);

    it("contains a submit button", () => {
        const login = render(<Login/>)
        const button = login.getByText("SUBMIT")
        expect(button).toHaveTextContent("SUBMIT")
    });
    })
});

describe("<HomePage/>", () => {
    test("renders the HomePage component", () => {
        const homepage = render(<HomePage/>)
        expect(homepage).not.toBe(null)

    it("contains a login button", () => {
        const homepage = render(<HomePage/>)
        const button = homepage.getByText("LOGIN")
        expect(button).toHaveTextContent("LOGIN")

        fireEvent.click(button)
        //ByTestId find by data-testid attribute. Add data-testid to login component. 
        const loginComponent = getByTestId("login-component")
        expect(loginComponent).toBeInTheDocument()



    it("contains a register button", () => {
        const homepage = render(<HomePage/>)
        const button = homepage.getByText("REGISTER")
        expect(button).toHaveTextContent("REGISTER")

        fireEvent.click(button)
        
        const registerComponent =getByTestId("register-component")
        expect(registerComponent).toBeInTheDocument()

    })

    })
    })
})
