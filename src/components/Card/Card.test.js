import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import notAvalilableImage from '../../assets/imageNotAvailable.svg';


describe('Card', () => {
    const AUTHOR_NOT_AVAILABLE = "Author not available";
    it('should render a card with provided title, author, urlImage, and description', () => {
        const title = 'Test Title';
        const author = 'Test Author';
        const urlImage = 'test-image.jpg';
        const description = 'Test Description';
        render(<Card title={title} author={author} urlImage={urlImage} description={description} />);
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(`Author : ${author}`)).toBeInTheDocument();
        expect(screen.getByAltText('card_cover')).toHaveAttribute('src', urlImage);
        expect(screen.getByText(description)).toBeInTheDocument();
    });

    it('should display "Author not available" if author is null', () => {
      const title = 'Test Title';
      const author = null;
      const urlImage = 'test-image.jpg';
      const description = 'Test Description';
      render(<Card title={title} author={author} urlImage={urlImage} description={description} />);
      expect(screen.getByText(`Author : ${AUTHOR_NOT_AVAILABLE}`)).toBeInTheDocument();
    });
});
