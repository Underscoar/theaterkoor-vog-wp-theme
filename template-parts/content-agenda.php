<header class="vervolg-header break-from-container purple-wall">
	<div class="header-left">
		<div class="header-content">
            <div class="content-titles">
				<div class="container">
					<span role="doc-subtitle" class="pre-hidden">Agenda</span>
					<h1><span class="pre-hidden"><?php the_title(); ?></span></h1>
				</div>
			</div>
		</div>
	</div>
	<div class="header-right">
		<div class="img-wrap pre-pre-hidden">
			<div class="simpleParallax">
                <?php the_post_thumbnail( 'full' ); ?>
            </div>
		</div>
	</div>
</header>

<div class="container">
    <div class="post-wrap">
        <div class="back-btn-wrap">
            <a class="btn btn-primary" href="/agenda"><i class="ph ph-arrow-left"></i>Terug naar agenda</a>
        </div>
        <h1><?php the_title(); ?></h1>
        <div class="agenda-item-attributes">
            <?php
                $fmt = datefmt_create(
                    'nl_NL',
                    IntlDateFormatter::FULL,
                    IntlDateFormatter::FULL,
                    'Europe/Amsterdam',
                    IntlDateFormatter::GREGORIAN,
                    'd MMMM yyyy'
                );

                $date_string = get_field( 'event_date' );
                $end_date_string = get_field( 'event_end_date' );
                if (is_string($date_string) && $date_string !== '') {
            ?>
                <div class="attribute">
                    <i class="ph ph-calendar-dots"></i>
                    <?php
                        $date = DateTime::createFromFormat( 'Ymd', $date_string );
                        $time = $date->format( 'U' );

                        echo datefmt_format($fmt, $time);

                        if (is_string($end_date_string) && $end_date_string !== '') {
                            $end_date = DateTime::createFromFormat( 'Ymd', $end_date_string );
                            $end_time = $end_date->format( 'U' );

                            echo ' - ' . datefmt_format($fmt, $end_time);
                        }
                    ?>
                </div>
            <?php } ?>

            <?php
                $location_string = get_field( 'event_location' );
                if (is_string($location_string) && $location_string !== '') {
            ?>
                <div class="attribute">
                    <i class="ph ph-map-pin"></i>
                    <?php echo $location_string; ?>
                </div>
            <?php } ?>
        </div>
        <?php
            the_content();
        ?>
    </div>
</div>