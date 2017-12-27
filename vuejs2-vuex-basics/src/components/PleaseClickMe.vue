<script>
    // Import the EventBus.
    import { EventBus } from './event-bus.js';

    // Listen for the i-got-clicked event and its payload.
    EventBus.$on('i-got-clicked', clickCount => {
        console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
    });
</script>