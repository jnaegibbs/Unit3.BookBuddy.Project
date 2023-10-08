//Properly written tests to check correct render of react components.
import React from "react";
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Books from "../components/Books";
import SingleBook from "../components/SingleBook";


describe ("<Books/>", () => {
    test("renders the Books component", () => {
        const books = render(<Books/>)
        expect(books).not.toBe(null);
    
    it ("contains a more info button", () => {
        const books = books.getByText("MORE INFO")

        expect(button).toBeInTheDocument();

    it("contains an add to cart button", () => {
        const books = books.getByText("ADD TO CART")

        fireEvent.click(button);

        expect(button).toHaveTextContent("ADD TO CART");
    })
    })

    })
})

describe ("<SingleBook/>", () => {
    test("renders the SingleBook component", () => {
        const Singlebook = render(<SingleBook/>)
        expect(Singlebook).not.toBe(null);
    })
})
