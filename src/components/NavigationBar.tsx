import { pathNames } from '../LazyRoutes';
import NavigationMenu from './NavigationMenu';

const NavigationBar = () => {
  return (
    <nav className={'w-full bg-gray-100 pb-10 font-sans shadow'}>
      <div className="bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start gap-2 py-4">
            <NavigationMenu pathname={pathNames.work} label={'work todos'} />
            <NavigationMenu pathname={pathNames.shoppingList} label={'shopping list'} />
            <NavigationMenu pathname={pathNames.auth} label={'login'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
