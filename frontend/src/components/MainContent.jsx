import PropTypes from 'prop-types';
import ContentArea from './ContentArea';

function MainContent({ selectedComponent }) {
    if (!selectedComponent) {
      return <div className="flex-1">Sélectionnez un élément du menu</div>;
    }
  
    return (
      <div className="flex-1 flex flex-col">
        {/* ... autres éléments ... */}
        <ContentArea content={selectedComponent} />
      </div>
    );
  }
  
  MainContent.propTypes = {
    selectedComponent: PropTypes.elementType,
  };
  
  export default MainContent;
  
  