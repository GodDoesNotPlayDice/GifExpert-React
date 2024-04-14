import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, categories }) => {
    const onAddCategory = (e) => { 
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            const newCategory = e.target.value.trim();
            if (categories.includes(newCategory)) return;
            setCategories(prevCategories => [...prevCategories, newCategory]);
            e.target.value = "";
        }
    };
    
    return (
        <>
            <input 
                className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="search" 
                type="text" 
                placeholder="Capitán América!" 
                onKeyDown={onAddCategory}
            />
        </>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
};
