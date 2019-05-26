import { AppComponent } from './app.component';

describe('App component', () => {
    let component: AppComponent;

    beforeEach(() => {
        component =  new AppComponent();
    });

    it('should have a component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a title of "Tour of Heroes"', () => {
        expect(component.title).toEqual('Tour of Heroes')
    });
});