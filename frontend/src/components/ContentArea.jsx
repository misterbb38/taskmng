import PropTypes from 'prop-types';

function ContentArea({ content }) {
    return (
      <div className="p-4">
        {content}
      </div>
    );
  }
  
  ContentArea.propTypes = {
    content: PropTypes.node.isRequired,
  };
  
  export default ContentArea;
  
