import { H3, P, Section } from '../../atoms'
import { SampleCodeCard } from './SampleCodeCard'
import { useSamples } from './useSamples'

export const SampleCode = () => {
  const samples = useSamples()

  return (
    <Section>
      <H3>サンプルコード</H3>
      <P>このサイトをテスト対象とした自動テストスクリプトです。学習の参考としてお使いください。</P>
      <div className='-mb-4 flex gap-[30px]'>
        {samples.map((sample, i) => (
          <SampleCodeCard key={i} {...sample} />
        ))}
      </div>
    </Section>
  )
}
