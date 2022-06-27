import classes from './MealsSummery.module.css';

const MealsSummery = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious food, Delivered to you</h2>
            <p>
                Choose your favourite meal from our broad selection of available meals 
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingedients, just-in-time and
                of course by experienced chefs!
            </p>
        </section>
    )
}
export default MealsSummery;