import { Component, OnInit, Input } from '@angular/core';
import { ShimmerService } from 'src/app/service/shimmer.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-shimmer-card',
  templateUrl: './shimmer-card.component.html',
  styleUrls: ['./shimmer-card.component.css'],
  animations: [
    trigger('shimmerAnimation', [
      transition('void => *', [
        style({ backgroundPosition: '-100% 0' }),
        animate('2s', style({ backgroundPosition: '100% 0' })),
      ]),
    ]),
  ],
})
export class ShimmerCardComponent implements OnInit {
  @Input() shimmerFor: string;

  constructor(private shimmerService: ShimmerService) {}

  ngOnInit(): void {
    const animationId = this.shimmerService.generateShimmerAnimationId();
    this.startShimmerAnimation(animationId);
  }

  ngOnDestroy(): void {
    this.shimmerService.removeShimmaeAnimationId(this.shimmerFor);
  }

  startShimmerAnimation(animationId: string): void {
    // Implements shimmer animation logic here
  }
}
