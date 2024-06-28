import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar.tsx"; 
import React from "react";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "../../../../shared/lib/tests/RenderWithTranslation/RenderWithTranslation";


describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('with toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
});
