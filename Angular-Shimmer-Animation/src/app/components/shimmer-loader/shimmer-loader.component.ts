import { Component, OnInit, Input } from '@angular/core';
import { ShimmerService } from 'src/app/service/shimmer.service';
import { animate, trigger, transition, style } from '@angular/animations';

@Component({
  selector: 'app-shimmer-loader',
  templateUrl: './shimmer-loader.component.html',
  styleUrls: ['./shimmer-loader.component.css'],
  animations: [
    trigger('shimmerAnimation', [
      transition('void => *', [
        style({ backgroundPosition: '-100% 0' }),
        animate('2s', style({ backgroundPosition: '100% 0' })),
      ]),
    ]),
  ],
})
export class ShimmerLoaderComponent implements OnInit {
  @Input() shimmerFor: string;

  constructor(private shimmerService: ShimmerService) {}

  ngOnInit(): void {
    const animationId = this.shimmerService.generateShimmerAnimationId();
    this.startShimmerAnimation(animationId);
  }

  ngOnDestroy(): void {
    this.shimmerService.removeShimmaeAnimationId(this.shimmerFor);
  }

  startShimmerAnimation(animationId: string): void {}
}
