<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<section class="footer-contact break-from-container" style="background-image: url('<?= $attributes['mediaUrl']; ?>'); background-position: <?= $attributes['mediaPosition']; ?>">
	<div class="container container-small">
		<span role="doc-subtitle">
			<?php echo $attributes['subtitle']; ?>
		</span>
		<h2>
			<?php echo $attributes['title']; ?>
		</h2>
		<?php echo $content; ?>
	</div>
</section>