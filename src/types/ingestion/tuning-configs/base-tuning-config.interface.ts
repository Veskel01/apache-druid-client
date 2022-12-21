export type TIndexSpec = {
  bitmap?: {
    type?: 'roaring' | 'concise';
  };
  dimensionCompression?: 'lz4' | 'lzf' | 'uncompressed';
  metricCompression?: 'lz4' | 'lzf' | 'uncompressed' | 'none';
  longEncoding?: 'longs' | 'auto';
};

export interface IBaseTuningConfig {
  maxRowsInMemory?: number;
  maxBytesInMemory?: number;
  skipBytesInMemoryOverheadCheck?: boolean;
  indexSpec?: TIndexSpec;
  indexSpecForIntermediatePersists?: TIndexSpec;
}
