import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button type="submit" onClick={() => setIsOpen(true)}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ullam debitis minima corrupti iure exercitationem earum laborum quos labore dolorem? Placeat inventore excepturi fugiat consequatur consequuntur laboriosam blanditiis debitis architecto non facilis at numquam, ipsa eligendi assumenda quod dolore. Dicta sit delectus dolores harum et? Doloremque quo quam ratione at!
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
